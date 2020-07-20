from django.db.models import BooleanField


class AdminMixin:
    def get_queryset(self, request):
        qs = super().get_queryset(request)

        for descriptor in self._DDB_annotations().values():
            qs = descriptor.get_queryset(self, request, qs)

            annotation = qs.query.annotations.get(descriptor.name)
            if not annotation:  # pragma: no cover
                raise Exception(
                    f"Can't find annotation '{descriptor.name}' for {self}.{descriptor.name}"
                )

            field_type = getattr(annotation, "output_field", None)
            if not field_type:  # pragma: no cover
                raise Exception(
                    f"Annotation '{descriptor.name}' for {self}.{descriptor.name} doesn't specify 'output_field'"
                )

            descriptor.boolean = isinstance(field_type, BooleanField)
        return qs

    def get_readonly_fields(self, request, obj=None):  # pragma: no cover
        res = super().get_readonly_fields(request, obj)
        return list(res) + list(self._DDB_annotations())

    @classmethod
    def _DDB_annotations(cls):
        if not hasattr(cls, "_DDB_annotations_real"):
            cls._DDB_annotations_real = {}
        return cls._DDB_annotations_real


class AnnotationDescriptor:
    def __init__(self, get_queryset):
        self.get_queryset = get_queryset

    def __set_name__(self, owner, name):
        self.name = name
        self.__name__ = name
        self.admin_order_field = name
        if not issubclass(owner, AdminMixin):  # pragma: no cover
            raise Exception(
                "Django Data Browser 'annotation' decorator used without 'AdminMixin'"
            )
        owner._DDB_annotations()[name] = self

    def __get__(self, instance, owner=None):
        return self

    def __call__(self, obj):  # pragma: no cover
        return getattr(obj, self.name)


annotation = AnnotationDescriptor
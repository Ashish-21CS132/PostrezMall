from rest_framework import serializers
from .models import Poster, Category

class PosterSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Poster
        fields = ['id', 'title','price', 'description', 'category', 'image', 'top_pick']

    def get_image(self, obj):
        request = self.context.get('request')
        image_url = obj.image.url
        return request.build_absolute_uri(image_url)

class CategorySerializer(serializers.ModelSerializer):
    posters = PosterSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'posters')
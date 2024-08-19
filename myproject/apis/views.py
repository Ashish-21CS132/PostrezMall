from rest_framework import viewsets
from .models import Poster, Category
from .serializers import PosterSerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PosterViewSet(viewsets.ModelViewSet):
    queryset = Poster.objects.all()
    serializer_class = PosterSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        top_pick = self.request.query_params.get('top_pick')
        if top_pick:
            queryset = queryset.filter(top_pick=True)
        return queryset


class TopPicksView(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        data = {}
        for category in categories:
            top_pick = Poster.objects.filter(category=category, top_pick=True).first()
            if top_pick:
                data[category.name] = PosterSerializer(top_pick, context={'request': request}).data
        return Response(data)

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, PosterViewSet, TopPicksView

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'posters', PosterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('top-picks/', TopPicksView.as_view(), name='top-picks'),
]

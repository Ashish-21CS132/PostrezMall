from django.contrib import admin
from .models import Category, Poster

# Register the Category model
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

# Register the Poster model
@admin.register(Poster)
class PosterAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'top_pick')
    list_filter = ('category', 'top_pick')
    search_fields = ('title', 'description')

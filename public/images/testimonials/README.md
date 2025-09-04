# Testimonial Images

## How to Add Testimonial Images

1. **Add your image file** to this folder (`public/images/testimonials/`)
2. **Use consistent naming**: `person-name.jpg` (e.g., `anthony-oneal.jpg`)
3. **Update the testimonial data** in `components/testimonials/testimonialData.ts`:

```typescript
{
  id: 'person-name',
  name: 'Person Name',
  // ... other fields
  image: '/images/testimonials/person-name.jpg' // Add this line
}
```

## Image Requirements

- **Format**: `.jpg` or `.webp` preferred for performance
- **Size**: Square images work best (400x400px or larger)
- **Quality**: High quality, professional headshots
- **Background**: Any background works - images are automatically cropped to circles

## That's It!

The testimonial components will automatically:
- Show the image in a perfect circle
- Fall back to initials if no image is provided
- Handle all the styling and responsive behavior
- Work across all testimonial layouts (text, picture, featured)

## Current Image Files Needed

Based on the testimonial data, you can add these image files:

- `sean-cannell.jpg` (featured testimonial)
- `anthony-oneal.jpg` (text testimonial)
- `vitaly-novok.jpg` (if you want to add his image)
- `ashley-bullard.jpg` (if you want to add her image) 
- `nehemiah-davis.jpg` (if you want to add his image)
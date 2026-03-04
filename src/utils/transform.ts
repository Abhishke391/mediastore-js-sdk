import { TransformParams } from '../types';

/**
 * Build a transformed image URL with query parameters
 */
export function buildTransformUrl(baseUrl: string, params: TransformParams): string {
  const query = new URLSearchParams();

  if (params.w) query.set('w', params.w.toString());
  if (params.h) query.set('h', params.h.toString());
  if (params.fit) query.set('fit', params.fit);
  if (params.blur) query.set('blur', params.blur.toString());
  if (params.grayscale) query.set('grayscale', 'true');
  if (params.quality) query.set('q', params.quality.toString());
  if (params.brightness) query.set('brightness', params.brightness.toString());
  if (params.contrast) query.set('contrast', params.contrast.toString());

  const queryString = query.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Helper functions for common transformations
 */
export const transforms = {
  /**
   * Get thumbnail (150x150, cover fit)
   */
  thumbnail(url: string): string {
    return buildTransformUrl(url, { w: 150, h: 150, fit: 'cover' });
  },

  /**
   * Resize to specific dimensions
   */
  resize(url: string, width: number, height?: number): string {
    return buildTransformUrl(url, { w: width, h: height });
  },

  /**
   * Apply blur effect
   */
  blur(url: string, radius: number = 5): string {
    return buildTransformUrl(url, { blur: radius });
  },

  /**
   * Convert to grayscale
   */
  grayscale(url: string): string {
    return buildTransformUrl(url, { grayscale: true });
  },

  /**
   * Combine multiple effects
   */
  custom(url: string, params: TransformParams): string {
    return buildTransformUrl(url, params);
  },
};
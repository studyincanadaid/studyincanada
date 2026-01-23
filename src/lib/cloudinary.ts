/**
 * Cloudinary utility functions
 */

export function getCloudinaryImageUrl(
  imageId: string,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: "auto" | "webp" | "jpg" | "png"
    transformation?: string
  }
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
  
  if (!cloudName) {
    console.warn("Cloudinary cloud name is not set")
    return ""
  }

  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    transformation = "",
  } = options || {}

  let url = `https://res.cloudinary.com/${cloudName}/image/upload`

  // Add transformations
  const transformations: string[] = []
  
  if (transformation) {
    transformations.push(transformation)
  }
  
  if (width) {
    transformations.push(`w_${width}`)
  }
  
  if (height) {
    transformations.push(`h_${height}`)
  }
  
  if (quality !== "auto") {
    transformations.push(`q_${quality}`)
  }
  
  if (format !== "auto") {
    transformations.push(`f_${format}`)
  }

  if (transformations.length > 0) {
    url += `/${transformations.join(",")}`
  }

  url += `/${imageId}`

  return url
}


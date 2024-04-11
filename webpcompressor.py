import os
from PIL import Image
from tqdm import tqdm
import logging

# Setup logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

def optimize_images(folder, max_width=1920, max_height=1080):
    total_kb_saved = 0  # Variable to store the total kilobytes saved
    
    # Print out the list of all image files found in subfolders
    print("List of all image files found in subfolders:")
    for root, _, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.webp')):
                print(os.path.join(root, file))

    # Traverse all subfolders and get a list of all image files
    image_files = []
    for root, _, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.webp')):
                image_files.append(os.path.join(root, file))
    
    # Iterate through each image file
    for image_file in tqdm(image_files, desc="Optimizing images", unit="image"):
        try:
            # Open the image file
            with Image.open(image_file) as img:
                # Resize the image while preserving aspect ratio
                img.thumbnail((max_width, max_height), Image.LANCZOS)
                
                # Get the size of the original image file
                original_size_kb = os.path.getsize(image_file) / 1024
                
                # Optimize the image to reduce file size
                img.save(image_file, quality=90)  # Compress in native format
                
                # If the image is not a WebP image, convert it to WebP format
                if not image_file.lower().endswith('.webp'):
                    webp_file = os.path.splitext(image_file)[0] + '.webp'
                    img.save(webp_file, "webp", quality=90, lossless=True)  # Convert to WebP
                
                    # Get the size of the optimized WebP image file
                    optimized_size_kb = os.path.getsize(webp_file) / 1024
                
                    # Calculate the kilobytes saved
                    kb_saved = original_size_kb - optimized_size_kb
                    total_kb_saved += kb_saved
                
                    # Log the kilobytes saved for this image
                    logging.info(f"Saved {kb_saved:.2f} KB by optimizing {image_file} and converting to WebP")
                else:
                    # Get the size of the optimized image file
                    optimized_size_kb = os.path.getsize(image_file) / 1024
                
                    # Calculate the kilobytes saved
                    kb_saved = original_size_kb - optimized_size_kb
                    total_kb_saved += kb_saved
                
                    # Log the kilobytes saved for this image
                    logging.info(f"Saved {kb_saved:.2f} KB by optimizing {image_file}")
        except Exception as e:
            # Log the error
            logging.error(f"Error optimizing {image_file}: {e}")
            # Continue to the next image
            continue
    
    # Log the total kilobytes saved
    logging.info(f"Total KB saved: {total_kb_saved:.2f} KB")



# Main function
def main():
    # Specify the folder containing the images
    folder_path = input("Enter the folder path containing images: ")
    
    # Call the function to compress and optimize images
    optimize_images(folder_path)
    
    # Log completion
    logging.info("Image optimization completed!")

if __name__ == "__main__":
    main()

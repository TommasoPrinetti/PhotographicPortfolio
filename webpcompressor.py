import os
from PIL import Image
from tqdm import tqdm
import logging

# Setup logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# Define function to optimize WebP images
def optimize_webp_images(folder):
    total_kb_saved = 0  # Variable to store the total kilobytes saved
    
    # Get a list of all WebP image files in the folder and its subfolders
    webp_files = [os.path.join(folder, root, file) for root, _, files in os.walk(folder) for file in files if file.lower().endswith('.webp')]

    # Iterate through each WebP image file
    for webp_file in tqdm(webp_files, desc="Optimizing WebP images", unit="image"):
        try:
            # Get the size of the original WebP image file
            original_size_kb = os.path.getsize(webp_file) / 1024
            
            # Open the WebP image file
            with Image.open(webp_file) as img:
                # Optimize the image to reduce file size
                img.save(webp_file, "webp", quality=85, method=6)
            
            # Get the size of the optimized WebP image file
            optimized_size_kb = os.path.getsize(webp_file) / 1024
            
            # Calculate the kilobytes saved
            kb_saved = original_size_kb - optimized_size_kb
            total_kb_saved += kb_saved
            
            # Log the kilobytes saved for this image
            logging.info(f"Saved {kb_saved:.2f} KB by optimizing {webp_file}")
        except Exception as e:
            # Log the error
            logging.error(f"Error optimizing {webp_file}: {e}")
            # Continue to the next image
            continue
    
    # Log the total kilobytes saved
    logging.info(f"Total KB saved: {total_kb_saved:.2f} KB")

# Main function
def main():
    # Specify the folder containing the WebP images
    folder_path = input("Enter the folder path containing WebP images: ")
    
    # Call the function to optimize WebP images
    optimize_webp_images(folder_path)
    
    # Log completion
    logging.info("WebP image optimization completed!")

if __name__ == "__main__":
    main()

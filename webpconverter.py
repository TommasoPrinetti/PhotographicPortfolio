import os
import sys
from PIL import Image
from tqdm import tqdm
import logging

# Setup logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# Define function to convert images to WebP format
def convert_to_webp(folder):
    # Get a list of all image files in the folder and its subfolders
    image_files = [os.path.join(folder, root, file) for root, _, files in os.walk(folder) for file in files if file.endswith(('.webp', '.jpeg', '.png'))]

    # Create a log file for errors
    error_log_file = "conversion_errors.log"
    logging.getLogger().addHandler(logging.FileHandler(error_log_file))

    # Iterate through each image file
    for image_file in tqdm(image_files, desc="Converting images", unit="image"):
        try:
            # Open the image file
            with Image.open(image_file) as img:
                # Get the file name and extension
                file_name, file_ext = os.path.splitext(image_file)
                # Convert the image to WebP format
                webp_file = f"{file_name}.webp"
                img.save(webp_file, "webp")
                # Remove the original image file
                os.remove(image_file)
        except Exception as e:
            # Log the error to the log file
            logging.error(f"Error converting {image_file}: {e}")
            # Continue to the next image
            continue

# Main function
def main():
    # Check if a folder path is provided as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python script.py <folder_path>")
        sys.exit(1)
    
    # Get the folder path from the command-line arguments
    folder_path = sys.argv[1]
    
    # Call the function to convert images to WebP format
    convert_to_webp(folder_path)
    
    # Log completion
    logging.info("Image conversion completed!")

if __name__ == "__main__":
    main()

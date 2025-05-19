#!/bin/bash

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install it to use this script."
    exit 1
fi

# Default quality
quality=80

# Check for correct number of arguments
if [[ $# -lt 4 || $# -gt 6 ]]; then
    echo "Usage: ./img2webp.sh --input <input_file> --output <output_file> [--quality <quality>]"
    exit 1
fi

# Assign input and output files from arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --input) input_file="$2"; shift ;;
        --output) output_file="$2"; shift ;;
        --quality) quality="$2"; shift ;;
    esac
    shift
done

# Check if the input file exists
if [[ ! -f "$input_file" ]]; then
    echo "Error: Input file does not exist: $input_file"
    exit 1
fi

# Convert PNG to WebP with specified quality
cwebp -q "$quality" "$input_file" -o "$output_file"
echo "Converted: $input_file to $output_file with quality $quality"
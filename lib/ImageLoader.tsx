
import Image, { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src }: ImageLoaderProps) => {
    return `https://source.unsplash.com/random/244x324`;
}
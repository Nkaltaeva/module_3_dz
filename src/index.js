import ("./index.scss");

import { drawGalleryItem } from './item';
import items from './items';

const galleryRootElement = document.getElementById('galleryRoot');

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))
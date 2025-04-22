import numpy as np
import cv2

img = cv2.imread("img.jpeg")
sharpen_kernel = np.array([[0, -1, 0],
                           [-1, 5,-1],
                           [0, -1, 0]])
sharpened = cv2.filter2D(img, -1, sharpen_kernel)

denoised = cv2.fastNlMeansDenoisingColored(sharpened, None, 10, 10, 7, 21)
cv2.imwrite("output_sharp_denoised.jpg", denoised)
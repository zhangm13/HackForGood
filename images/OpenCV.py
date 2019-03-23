import cv2
print(cv2.__version__)
vidcap = cv2.VideoCapture('videoNerf.mp4')
success,image = vidcap.read()
count = 0
success = True
while count < 100 and success:
  cv2.imwrite("frame%d.jpg" % count, image)     # save frame as JPEG file
  success,image = vidcap.read()
  print 'Read a new frame: ', count
  count += 1

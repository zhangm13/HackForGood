# AIForGood  - LookOutAI

Lookout AI is a project that was created at the 2019 AIForGood Hackathon in Whitby, ON.

Our group built a responsive web app to be used by security personel to detect the presence of weapons in public spaces. Our team used a banana as a proxy for a weapon.

The team used OpenCV and a pre-trained Tensorflow model for object detection in a live video stream. When the camera detected a "weapon", it would alert the security portal that a threat was detected. The security guard could then review the alert, determine whether the alert was legitimate, and then either dismis the alert (if a false poitive) or request emergency help.

The web app was created in React, using a starting template from CreativeTim.com

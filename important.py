import os
import sys
import subprocess

backendServerLink = "https://github.com/DeepeshKalura/textToSpeechForHealthCareAPI"

try:

    print("Cloning backend server successful")
    subprocess.run(["git", "clone", backendServerLink])

except:
    
        print("Cloning backend server failed")
        sys.exit(1)
    
try:
    print("Changing the folder name")
    os.rename("textToSpeechForHealthCareAPI", "server")
except:
    print("Changing the folder name failed")
    sys.exit(1)

try:
    print("Changing the directory")
    os.chdir("server")
    subprocess.run(["python", "-m", "venv", ".venv"])    
except:
    print("Changing the directory failed")
    sys.exit(1)

try:
    print("Activating the virtual environment")
    print("I am here")
    subprocess.run(["source", ".venv/bin/activate"])

except:
    print("Activating the virtual environment failed")
    sys.exit(1)



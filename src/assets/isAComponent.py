import os
import sys
rootdir = sys.argv[1]


for root, subFolders, files in os.walk(rootdir):
    for myFile in files:
        print(str(myFile))
        with open(os.path.join(root, myFile)) as myComponent:
            myComponent2 = myComponent
            data = myComponent.read()
            data2 = data.replace('\n', '')
            isAComponent = data2.find('extends Component {') > -1
            if isAComponent:
                print(str(myFile + " > In this file there is a React component."))
                hasDefinedPropTypes = data2.find('static get propTypes') > -1
                if hasDefinedPropTypes:
                    print(str(myFile + " >> ... and it has defined Props."))
                else:
                    print(str(myFile + " >> ... and it doesn't have defined Props!"))
            else:
                print(str(myFile + " > This is NOT a component. Try another file."))
        # with open(os.path.join(root, 'App.js'), 'r') as fin:
        #     for lines in fin:
        #         print("!")

# VERSION 1 #
# import sys
#
# print(str(sys.argv))
#
# myFile = ""
#
# for arg in sys.argv:
#     isAJsFile = str(arg).find('.js') > -1
#     if isAJsFile:
#         myFile = str(arg)
#         if myFile != "":
#             with open(myFile, 'r') as myComponent:
#                 data=myComponent.read().replace('\n', '')
#                 isAComponent = data.find('extends Component {') > -1
#                 if isAComponent:
#                     print(str(myFile + " > In this file there is a React component."))
#                 else:
#                     print(str(myFile + " > This is NOT a component. Try another file."))
#         else:
#             print("This is NOT a javascript file. Try another file.")

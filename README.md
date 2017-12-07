TODO: Drawer
https://github.com/daviddang91/react-native-redux-starter-kit/blob/master/src/routers/Drawer.js



-----------------------------------
# INSTALL:

```
cd project_path
npm i --save
```

-----------------------------------
# RUN:

```
cd project_path
npm start
```

-----------------------------------
# FLOW
https://flow.org/en/docs/react/
https://flow.org/en/docs/types/

## The first time, run:

```
npm run flow init
```

## Check for flow errors, run:

```
npm run flow
```

## Error: Required module not found, run

### Install flow-typed

```
npm install -g flow-typed
```

### Add flow-typed for module

```
flow-typed install [module_name]@[module_version]
```

-----------------------------------
# NATIVEBASE

## Error: Unrecognized font family, run

```
react-native link react-native-vector-icons
```

clean and run again

## Remove NativeBase

search for 'native-base' and remove all of them

### Remove native-base codes

### Uninstall NativeBase

```
react-native unlink react-native-vector-icons
react-native unlink native-base
npm uninstall native-base
```

clean and run again

-----------------------------------
# MAP

Tutorials
- https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14

## Error: Yoga not match

Edit Podfile, change this

```
pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga/Yoga.podspec'
```

to this (Lowercase yoga)

```
pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga/Yoga.podspec'
```

## Error: Property 'cameraTargetBounds' not found on object of type 'AIRGoogleMap *'

https://github.com/react-community/react-native-maps/issues/1836

## Error: CFBundleIdentifier


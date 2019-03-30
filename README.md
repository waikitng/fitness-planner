## How to Install with Android Emulator

Download "GennyMotion" for a use of an Emulator, move to the directory of the project and do the following bellow:

1. `rm -rf .rncache`
2. `rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/haste-map-react-native-packager-* && rm -rf node_modules/`
3. `npm install`
4. `npm start -- --reset-cache`
5. `react-native run-android`

The first 4 options you only need to do them for the first time only, after that, everytime you want to run the application do the following:

1. `npm start`
2. `react-native run-android`

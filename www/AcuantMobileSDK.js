/*global cordova, module*/
var agent = navigator.userAgent;
var isAndroid = agent.indexOf("Android") > 0;
var isIOS =
  agent.indexOf("iPhone") > 0 ||
  agent.indexOf("iPod") > 0 ||
  agent.indexOf("iPad") > 0;

module.exports = {
  initAcuantMobileSDK: function(
    successCallback,
    failure,
    licenseKey,
    cloudAddress
  ) {
    if (licenseKey === null) {
      licenseKey = "";
    }
    if (cloudAddress === null) {
      cloudAddress = "";
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "initAcuantMobileSDK",
      [licenseKey, cloudAddress]
    );
  },
  initAcuantMobileSDKAndShowCardCaptureInterfaceInViewController: function(
    successCallback,
    failure,
    licenseKey,
    cardType,
    region,
    isBackSide
  ) {
    if (licenseKey === null) {
      licenseKey = "";
    }
    if (cloudAddress === null) {
      cloudAddress = "";
    }

    if (typeof cardType !== "number") {
      failure({
        id: "initAcuantMobileSDKAndShowCardCaptureInterfaceInViewController",
        error: "Card Type Must Be Int"
      });
      return;
    }
    if (typeof region !== "number" && cardType == 2) {
      failure({
        id: "initAcuantMobileSDKAndShowCardCaptureInterfaceInViewController",
        error: "Region Must Be Int"
      });
      return;
    }

    if (typeof isBackSide !== "boolean" && cardType == 2) {
      failure({
        id: "initAcuantMobileSDKAndShowCardCaptureInterfaceInViewController",
        error: "isBackSide Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "initAcuantMobileSDKAndShowCardCaptureInterfaceInViewController",
      [licenseKey, cardType, region, isBackSide]
    );
  },
  showManualCameraInterfaceInViewController: function(
    successCallback,
    failure,
    cardType,
    region,
    isBackSide
  ) {
    if (typeof cardType !== "number") {
      failure({
        id: "showManualCameraInterfaceInViewController",
        error: "Card Type Must Be Int"
      });
      return;
    }
    if (typeof region !== "number" && cardType == 2) {
      failure({
        id: "showManualCameraInterfaceInViewController",
        error: "Region Must Be Int"
      });
      return;
    }
    if (typeof isBackSide !== "boolean" && cardType == 2) {
      failure({
        id: "showManualCameraInterfaceInViewController",
        error: "isBackSide Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showManualCameraInterfaceInViewController",
      [cardType, region, isBackSide]
    );
  },
  showBarcodeCameraInterfaceInViewController: function(
    successCallback,
    failure,
    cardType,
    region
  ) {
    if (typeof cardType !== "number") {
      failure({
        id: "showBarcodeCameraInterfaceInViewController",
        error: "Card Type Must Be Int"
      });
      return;
    }
    if (typeof region !== "number" && cardType == 2) {
      failure({
        id: "showBarcodeCameraInterfaceInViewController",
        error: "Region Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showBarcodeCameraInterfaceInViewController",
      [cardType, region]
    );
  },
  dismissCardCaptureInterface: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "dismissCardCaptureInterface",
      []
    );
  },
  startCamera: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "startCamera",
      []
    );
  },
  stopCamera: function(successCallback, failure) {
    cordova.exec(successCallback, failure, "AcuantMobileSDK", "stopCamera", []);
  },
  pauseScanningBarcodeCamera: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "pauseScanningBarcodeCamera",
      []
    );
  },
  resumeScanningBarcodeCamera: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "resumeScanningBarcodeCamera",
      []
    );
  },
  setLicenseKey: function(successCallback, failure, licenseKey) {
    if (licenseKey === null) {
      licenseKey = "";
    }
    cordova.exec(successCallback, failure, "AcuantMobileSDK", "setLicenseKey", [
      licenseKey
    ]);
  },
  enableLocationTracking: function(successCallback, failure) {
    if (isAndroid) {
      cordova.exec(
        successCallback,
        failure,
        "AcuantMobileSDK",
        "enableLocationAuthentication"
      );
    } else if (isIOS) {
      cordova.exec(
        successCallback,
        failure,
        "AcuantMobileSDK",
        "enableLocationTracking"
      );
    }
  },
  setCloudAddress: function(successCallback, failure, cloudAddress) {
    if (cloudAddress === null) {
      cloudAddress = "";
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setCloudAddress",
      [cloudAddress]
    );
  },
  activateLicenseKey: function(successCallback, failure, licenseKey) {
    if (licenseKey === null || licenseKey === "") {
      licenseKey = "";
      failure({
        errorType: true,
        id: "activateLicenseKey",
        errorMessage: "The license key cannot be empty."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "activateLicenseKey",
      [licenseKey]
    );
  },
  setWidth: function(successCallback, failure, width) {
    if (typeof width !== "number") {
      failure({
        id: "setWidth",
        error: "Width Must Be Int"
      });
      return;
    }
    cordova.exec(successCallback, failure, "AcuantMobileSDK", "setWidth", [
      width
    ]);
  },
  setCanCaptureOriginalImage: function(
    successCallback,
    failure,
    canCaptureOriginalImage
  ) {
    if (typeof canCaptureOriginalImage !== "boolean") {
      failure({
        id: "setCanCaptureOriginalImage",
        error: "canCaptureOriginalImage Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setCanCaptureOriginalImage",
      [canCaptureOriginalImage]
    );
  },
  setCanCropBarcode: function(successCallback, failure, canCropBarcode) {
    if (typeof canCropBarcode !== "boolean") {
      failure({
        id: "setCanCropBarcode",
        error: "canCropBarcode Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setCanCropBarcode",
      [canCropBarcode]
    );
  },
  setCropBarcodeOnCancel: function(
    successCallback,
    failure,
    cropBarcodeOnCancel
  ) {
    if (typeof cropBarcodeOnCancel !== "boolean") {
      failure({
        id: "setCropBarcodeOnCancel",
        error: "setCropBarcodeOnCancel Must Be Boolean"
      });
      return;
    }
    if (isAndroid) {
      cordova.exec(
        successCallback,
        failure,
        "AcuantMobileSDK",
        "setCropBarcodeOnCancel",
        [cropBarcodeOnCancel]
      );
    } else if (isIOS) {
      cordova.exec(
        successCallback,
        failure,
        "AcuantMobileSDK",
        "setCropBarcodeOnCancel",
        [cropBarcodeOnCancel]
      );
    }
  },
  setCanShowMessage: function(successCallback, failure, canShowMessage) {
    if (typeof canShowMessage !== "boolean") {
      failure({
        id: "setCanShowMessage",
        error: "canShowMessage Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setCanShowMessage",
      [canShowMessage]
    );
  },
  //Orientation: Landscape - 0, Portrait - 1, BackgroundColorRed: 0 - 255, BackgroundColorGreen: 0 - 255, BackgroundColorBlue: 0 - 255, BackgroundColorAlpha: 0 - 255
  setInitialMessage: function(
    successCallback,
    failure,
    initialMessage,
    frameX,
    frameY,
    frameWidth,
    frameHeight,
    backgroundColorRed,
    backgroundColorGreen,
    backgroundColorBlue,
    backgroundColorAlpha,
    duration,
    orientation
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "setInitialMessage",
        error: "Frame Must Be Int"
      });
      return;
    }
    if (
      typeof backgroundColorRed !== "number" ||
      typeof backgroundColorGreen !== "number" ||
      typeof backgroundColorBlue !== "number" ||
      typeof backgroundColorAlpha !== "number"
    ) {
      failure({
        id: "setInitialMessage",
        error: "Color Must Be Float"
      });
      return;
    }
    if (
      (backgroundColorRed < 0 && backgroundColorRed > 1) ||
      (backgroundColorGreen < 0 && backgroundColorGreen > 1) ||
      (backgroundColorBlue < 0 && backgroundColorBlue > 1) ||
      (backgroundColorAlpha < 0 && backgroundColorAlpha > 1)
    ) {
      failure({
        id: "setInitialMessage",
        error: "Duration Be Greather than 0 and Less 1"
      });
      return;
    }

    if (typeof duration !== "number") {
      failure({
        id: "setInitialMessage",
        error: "Duration Must Be Int"
      });
      return;
    }
    if (duration < 0) {
      failure({
        id: "setInitialMessage",
        error: "Duration Must Be Greather Than 0"
      });
      return;
    }

    if (typeof orientation !== "number") {
      failure({
        id: "setInitialMessage",
        error: "Orientation Must Be Float"
      });
      return;
    }
    if (orientation != 0 && orientation != 1) {
      failure({
        id: "setInitialMessage",
        error: "Orientation Must Be 0 or 1"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setInitialMessage",
      [
        initialMessage,
        frameX,
        frameY,
        frameWidth,
        frameHeight,
        backgroundColorRed,
        backgroundColorGreen,
        backgroundColorBlue,
        backgroundColorAlpha,
        duration,
        orientation
      ]
    );
  },
  //Orientation: Landscape - 0, Portrait - 1, BackgroundColorRed: 0 - 255, BackgroundColorGreen: 0 - 255, BackgroundColorBlue: 0 - 255, BackgroundColorAlpha: 0 - 255
  setCapturingMessage: function(
    successCallback,
    failure,
    capturingMessage,
    frameX,
    frameY,
    frameWidth,
    frameHeight,
    backgroundColorRed,
    backgroundColorGreen,
    backgroundColorBlue,
    backgroundColorAlpha,
    duration,
    orientation
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "setCapturingMessage",
        error: "Frame Must Be Int"
      });
      return;
    }
    if (
      typeof backgroundColorRed !== "number" ||
      typeof backgroundColorGreen !== "number" ||
      typeof backgroundColorBlue !== "number" ||
      typeof backgroundColorAlpha !== "number"
    ) {
      failure({
        id: "setCapturingMessage",
        error: "Color Must Be Float"
      });
      return;
    }
    if (
      (backgroundColorRed < 0 && backgroundColorRed > 1) ||
      (backgroundColorGreen < 0 && backgroundColorGreen > 1) ||
      (backgroundColorBlue < 0 && backgroundColorBlue > 1) ||
      (backgroundColorAlpha < 0 && backgroundColorAlpha > 1)
    ) {
      failure({
        id: "setCapturingMessage",
        error: "Duration Be Greather than 0 and Less 1"
      });
      return;
    }

    if (typeof duration !== "number") {
      failure({
        id: "setCapturingMessage",
        error: "Duration Must Be Int"
      });
      return;
    }
    if (duration < 0) {
      failure({
        id: "setCapturingMessage",
        error: "Duration Must Be Greather Than 0"
      });
      return;
    }

    if (typeof orientation !== "number") {
      failure({
        id: "setCapturingMessage",
        error: "Orientation Must Be Float"
      });
      return;
    }
    if (orientation != 0 && orientation != 1) {
      failure({
        id: "setCapturingMessage",
        error: "Orientation Must Be 0 or 1"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setCapturingMessage",
      [
        capturingMessage,
        frameX,
        frameY,
        frameWidth,
        frameHeight,
        backgroundColorRed,
        backgroundColorGreen,
        backgroundColorBlue,
        backgroundColorAlpha,
        duration,
        orientation
      ]
    );
  },
  processCardImage: function(
    successCallback,
    failure,
    frontImage,
    backImage,
    barcodeStringData,
    autoDetectState,
    stateID,
    reformatImage,
    reformatImageColor,
    DPI,
    cropImage,
    faceDetection,
    signatureDetection,
    region,
    logtransaction,
    imageSettings
  ) {
    if (typeof faceDetection !== "boolean") {
      failure({
        id: "processCardImage",
        error: "FaceDetection Must Be Boolean"
      });
      return;
    }
    if (typeof signatureDetection !== "boolean") {
      failure({
        id: "processCardImage",
        error: "SignatureDetection Must Be Boolean"
      });
      return;
    }
    if (typeof reformatImage !== "boolean") {
      failure({
        id: "processCardImage",
        error: "ReformatImage Must Be Boolean"
      });
      return;
    }
    if (typeof autoDetectState !== "boolean") {
      failure({
        id: "processCardImage",
        error: "AutoDetectState Must Be Boolean"
      });
      return;
    }
    if (typeof cropImage !== "boolean") {
      failure({
        id: "processCardImage",
        error: "CropImage Must Be Int"
      });
      return;
    }
    if (typeof DPI !== "number") {
      failure({
        id: "processCardImage",
        error: "DPI Must Be Int"
      });
      return;
    }
    if (typeof region !== "number" && cardType == 2) {
      failure({
        id: "processCardImage",
        error: "Region Must Be Int"
      });
      return;
    }

    if (typeof stateID !== "number") {
      failure({
        id: "processCardImage",
        error: "StateID Must Be Int"
      });
      return;
    }
    if (typeof reformatImageColor !== "number") {
      failure({
        id: "processCardImage",
        error: "ReformatImageColor Must Be Int"
      });
      return;
    }
    if (typeof logtransaction !== "boolean") {
      failure({
        id: "processCardImage",
        error: "logtransaction Must Be boolean"
      });
      return;
    }
    if (typeof imageSettings !== "number") {
      failure({
        id: "processCardImage",
        error: "imageSettings Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "processCardImage",
      [
        frontImage,
        backImage,
        barcodeStringData,
        autoDetectState,
        stateID,
        reformatImage,
        reformatImageColor,
        DPI,
        cropImage,
        faceDetection,
        signatureDetection,
        region,
        logtransaction,
        imageSettings
      ]
    );
  },
  cameraPrefersStatusBarHidden: function(
    successCallback,
    failure,
    hiddenStatusBar
  ) {
    if (typeof hiddenStatusBar !== "boolean") {
      failure({
        id: "cameraPrefersStatusBarHidden",
        error: "Show Back Button Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "cameraPrefersStatusBarHidden",
      [hiddenStatusBar]
    );
  },
  frameForWatermarkView: function(
    successCallback,
    failure,
    frameX,
    frameY,
    frameWidth,
    frameHeight
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "frameForWatermarkView",
        error: "Frame Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "frameForWatermarkView",
      [frameX, frameY, frameWidth, frameHeight]
    );
  },
  stringForWatermarkLabel: function(successCallback, failure, watermarkLabel) {
    if (watermarkLabel === null) {
      failure({
        id: "stringForWatermarkLabel",
        error: "Watermark Label Is Null"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "stringForWatermarkLabel",
      [watermarkLabel]
    );
  },
  frameForHelpImageView: function(
    successCallback,
    failure,
    frameX,
    frameY,
    frameWidth,
    frameHeight
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "frameForHelpImageView",
        error: "Frame Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "frameForHelpImageView",
      [frameX, frameY, frameWidth, frameHeight]
    );
  },
  imageForHelpImageView: function(successCallback, failure, helpImage) {
    if (helpImage === null) {
      failure({
        id: "imageForHelpImageView",
        error: "Help Image Is Null"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "imageForHelpImageView",
      [helpImage]
    );
  },
  showBackButton: function(successCallback, failure, showBackButton) {
    if (typeof showBackButton !== "boolean") {
      failure({
        id: "showBackButton",
        error: "Show Back Button Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showBackButton",
      [showBackButton]
    );
  },
  frameForBackButton: function(
    successCallback,
    failure,
    frameX,
    frameY,
    frameWidth,
    frameHeight
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "frameForBackButton",
        error: "Frame Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "frameForBackButton",
      [frameX, frameY, frameWidth, frameHeight]
    );
  },
  imageForBackButton: function(successCallback, failure, backButtonImage) {
    if (backButtonImage === null) {
      failure({
        id: "imageForBackButton",
        error: "Back Button Image Is Null"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "imageForBackButton",
      [backButtonImage]
    );
  },
  showiPadBrackets: function(successCallback, failure, showiPadBrackets) {
    if (typeof showBackButton !== "boolean") {
      failure({
        id: "showiPadBrackets",
        error: "show iPad Brackets Button Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showiPadBrackets",
      [showiPadBrackets]
    );
  },
  showFlashlightButton: function(
    successCallback,
    failure,
    showFlashlightButton
  ) {
    if (typeof showFlashlightButton !== "boolean") {
      failure({
        id: "showFlashlightButton",
        error: "showFlashlightButton Must Be Boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showFlashlightButton",
      [showFlashlightButton]
    );
  },
  frameForFlashlightButton: function(
    successCallback,
    failure,
    frameX,
    frameY,
    frameWidth,
    frameHeight
  ) {
    if (
      typeof frameX !== "number" ||
      typeof frameY !== "number" ||
      typeof frameWidth !== "number" ||
      typeof frameHeight !== "number"
    ) {
      failure({
        id: "frameForFlashlightButton",
        error: "Frame Must Be Int"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "frameForFlashlightButton",
      [frameX, frameY, frameWidth, frameHeight]
    );
  },
  imageForFlashlightButton: function(
    successCallback,
    failure,
    flashlightButtonImageOn,
    flashlightButtonImageOff
  ) {
    if (flashlightButtonImageOn === null) {
      failure({
        id: "imageForFlashlightButton",
        error: "Flashlight Button Image Is Null"
      });
      return;
    }
    if (flashlightButtonImageOff === null) {
      failure({
        id: "imageForFlashlightButton",
        error: "Flashlight Button Image Is Null"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "imageForFlashlightButton",
      [flashlightButtonImageOn, flashlightButtonImageOff]
    );
  },
  showFacialInterface: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "showFacialInterface"
    );
  },
  setFacialInstructionText: function(
    successCallback,
    failure,
    instructionText
  ) {
    if (instructionText === null) {
      failure({
        id: "setFacialInstructionText",
        error: "Instruction Text Is Null"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialInstructionText",
      [instructionText]
    );
  },
  setFacialInstructionLocation: function(successCallback, failure, left, top) {
    if (typeof left !== "number" || typeof top !== "number") {
      failure({
        id: "setFacialInstructionLocation",
        error: "left and top position must me int."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialInstructionLocation",
      [left, top]
    );
  },
  setFacialInstructionTextStyle: function(
    successCallback,
    failure,
    fontColor,
    fontSize
  ) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialInstructionTextStyle",
      [fontColor, fontSize]
    );
  },
  setFacialRecognitionTimeout: function(
    successCallback,
    failure,
    timeoutInSeconds
  ) {
    if (typeof timeoutInSeconds !== "number") {
      failure({
        id: "setFacialRecognitionTimeout",
        error: "timeoutInSeconds must me int."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialRecognitionTimeout",
      [timeoutInSeconds]
    );
  },
  processFacialImageValidation: function(
    successCallback,
    failure,
    selfieImage,
    faceImage,
    logtransaction
  ) {
    if (selfieImage === null || faceImage === null) {
      failure({
        id: "processFacialImageValidation",
        error: "Selfie Image or face image is null."
      });
      return;
    }
    if (typeof logtransaction !== "boolean") {
      failure({
        id: "processFacialImageValidation",
        error: "logtransaction Must Be boolean"
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "processFacialImageValidation",
      [selfieImage, faceImage, logtransaction]
    );
  },
  setFacialSubInstructionString: function(
    successCallback,
    failure,
    subInstructionString
  ) {
    if (subInstructionString === null || subInstructionString === "") {
      failure({
        id: "setFacialSubInstructionString",
        error: "Argument should not be null or empty."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialSubInstructionString",
      [subInstructionString]
    );
  },
  setFacialSubInstructionLocation: function(
    successCallback,
    failure,
    left,
    top
  ) {
    if (typeof left !== "number" || typeof top !== "number") {
      failure({
        id: "setFacialSubInstructionLocation",
        error: "left and top position must me int."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialSubInstructionLocation",
      [left, top]
    );
  },
  setFacialSubInstructionColor: function(successCallback, failure, fontColor) {
    if (fontColor === null || fontColor === "") {
      failure({
        id: "setFacialSubInstructionColor",
        error: "Font color must be provided."
      });
      return;
    }
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "setFacialSubInstructionColor",
      [fontColor]
    );
  },
  scanEChip: function(successCallback, failure) {
    if (isAndroid) {
      cordova.exec(
        successCallback,
        failure,
        "AcuantMobileSDK",
        "scanEChip",
        []
      );
    } else {
      failure({
        id: "scanEChip",
        error: "Not supported in this platform."
      });
      return;
    }
  },
  readEChip: function(
    successCallback,
    failure,
    intent,
    documentNumber,
    dateOfBirth,
    dateOfExpiry
  ) {
    if (isAndroid) {
      if (intent === null) {
        failure({
          id: "readEChip",
          error: "Please enter a valid Intent object."
        });
        return;
      }
      if (
        documentNumber === null ||
        documentNumber === "" ||
        dateOfBirth === null ||
        dateOfBirth === "" ||
        dateOfExpiry === null ||
        dateOfExpiry === ""
      ) {
        failure({
          id: "readEChip",
          error:
            "Please enter correct document number,date of birth and date of expiry."
        });
        return;
      }
      cordova.exec(successCallback, failure, "AcuantMobileSDK", "readEChip", [
        intent,
        documentNumber,
        dateOfBirth,
        dateOfExpiry
      ]);
    } else {
      failure({
        id: "readEChip",
        error: "Not supported in this platform."
      });
      return;
    }
  },
  isSDKValidated: function(successCallback, failure) {
    cordova.exec(
      successCallback,
      failure,
      "AcuantMobileSDK",
      "isSDKValidated",
      []
    );
  }
};

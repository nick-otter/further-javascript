function Assert() {
  function isTrue(assertion) {
    if (!assertion) {
      throw new Error("Expected: " + assertion + " to be true");
    } else {
    document.write("Test Passed")
    }
  }

  function isFalse(assertion) {
    if (assertion) {
      throw new Error("Expected: " + assertion + " to be false");
    } else {
    document.write("Test Passed")
    }
  }

  function isEqual(assertion, secondAssertion) {
    if (assertion !== secondAssertion) {
      throw new Error("Expected: " + assertion + "to equal" + secondAssertion);
    } else {
    document.write("Test Passed")
    }
  }

  return {
   isTrue: isTrue,
   isFalse: isFalse,
   isEqual: isEqual,
 };
}

function filterRejectionEmails() {
  // Search query to find job rejection emails based on common phrases
  var rejectionQuery = 'subject:("rejected" OR "unsuccessful" OR "not selected" OR "unfortunately" OR "appreciate your interest" OR "thank you for your" OR "other candidates")';

  // Get email threads that match the search query
  var rejectionThreads = GmailApp.search(rejectionQuery);

  // Label to move rejection emails to
  var rejectionLabelName = "Job Rejections";
  var rejectionLabel = GmailApp.getUserLabelByName(rejectionLabelName);
  
  // Create the label if it doesn't exist
  if (!rejectionLabel) {
    rejectionLabel = GmailApp.createLabel(rejectionLabelName);
  }

  // Process each thread
  for (var i = 0; i < rejectionThreads.length; i++) {
    var thread = rejectionThreads[i];
    var threadLabels = thread.getLabels();

    // Check if the thread already has the rejection label
    var alreadyLabeled = threadLabels.some(function(label) {
      return label.getName() === rejectionLabelName;
    });

    // If the thread doesn't have the label, add it and mark messages as read
    if (!alreadyLabeled) {
      thread.addLabel(rejectionLabel);
      var messages = thread.getMessages();
      for (var j = 0; j < messages.length; j++) {
        var message = messages[j];
        message.markRead();
      }
    }
  }

  Logger.log("Processed " + rejectionThreads.length + " rejection threads.");
}

// Set up a time-driven trigger to run the function every hour
function createTimeDrivenTrigger() {
  ScriptApp.newTrigger('filterRejectionEmails')
           .timeBased()
           .everyHours(1)
           .create();
}

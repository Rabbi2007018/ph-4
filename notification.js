function sendNotification(email) {
  
    if (typeof email !== 'string' || email.indexOf('@') === -1 || email.split('@').length !== 2) {
        return "Invalid Email";
    }


    const [username, domainName] = email.split('@');

  
    return username + " sent you an email from " + domainName;
}



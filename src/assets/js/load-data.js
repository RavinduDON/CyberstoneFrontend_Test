const profile_tab = document.getElementById('profile-tab');
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      profile_tab.style.display = 'unset';
      console.log('available');
    } else {
      // No user is signed in.
      profile_tab.style.display = 'none';
      console.log('unavailable');
    }
  });

  console.log('f');
Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: 'essam@epidemico.com',
            password: 'test'
        });
    }

});

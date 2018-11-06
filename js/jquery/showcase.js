let showcaseData = {
        userName: 'Theofficialmicdee',
        communityItemId: '4dbaddf0-d0aa-11e8-a2f1-9dcc56b40a32-1539629050191-2018-10-15T18:44:10.191Z',
        userId: 'HLiW1fwO6IRbbbgBOqbqy7ZfAyM2',
        name: 'Theofficialmicdee',
        id: 'HLiW1fwO6IRbbbgBOqbqy7ZfAyM2',
        last_sign_in_at: '2018-10-23T17:35:16.532Z',
        avatarURL: 'https://firebasestorage.googleapis.com/v0/b/puffy-prod-profile-images/o/HLiW1fwO6IRbbbgBOqbqy7ZfAyM2%2FF863026B-3EC6-464E-B9B9-59E24B77BBBD-1539627089410.jpeg?alt=media&token=fe1f16d7-fd0c-4021-9eac-d8c0f0280b87',
        mediaId: "4dbaddf0-d0aa-11e8-a2f1-9dcc56b40a32-1539629050191",
        mediaType: 'showcase',
        mediaUrl: 'https://storage.googleapis.com/puffy-prod-showcase-entries/HLiW1fwO6IRbbbgBOqbqy7ZfAyM2%2F2DEDA425-9F5E-4381-93D5-F2A231BE3ADC-1539629049432.mp4?GoogleAccessId=firebase-adminsdk-2v3ky%40puffy-prod.iam.gserviceaccount.com&Expires=16725225600&Signature=CLfU%2FQ8PRG5uAFpNG5xTlmfoVpc1QSKId7HWQH%2BzxOAAXw3OlAHGk%2FPQNOg1YoEYKhHS0zqU8sTeTFMTYohKUurbUbwFNNxWrVWWk5hjeaz19ev3Zi%2FjRb16njzRBNnQ02v1EjHpvNhqkzbECAdavQlmhZg1Rq2YcvanwFu8MJfPxio%2Fv3lQuDddFCVwo4Dm5PIUkJCIsFkY90uaW2AnvzGdVGtXqzVnPUUsEiqmgZU0J%2FUUNMqvVt9gmaNjRvi8TT8AS1nu7Vx4V6w2MpJF%2B4SMROL3yxcVHkK%2B50GRAI2%2BjvCJoVruNkshOKjs%2FgSFSCGuq4yI9HXsOlcCJN%2B1ng%3D%3D',
        thumbnailUrl: 'https://media.puffyapp.com/resize?imageUrl=aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3B1ZmZ5LXByb2Qtc2hvd2Nhc2UtZW50cmllcy9ITGlXMWZ3TzZJUmJiYmdCT3FicXk3WmZBeU0yJTJGdGh1bWJfMkRFREE0MjUtOUY1RS00MzgxLTkzRDUtRjJBMjMxQkUzQURDLTE1Mzk2MjkwNDk0MzIuanBlZz9Hb29nbGVBY2Nlc3NJZD1maXJlYmFzZS1hZG1pbnNkay0ydjNreSU0MHB1ZmZ5LXByb2QuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20mRXhwaXJlcz0xNjcyNTI1NDQwMCZTaWduYXR1cmU9Q2hDMXA5JTJCYUh4RnhzSkNYV2NUeEoxUmxaNVgzWG9vRUxhJTJCZEFSR21jR0RVcFJLM3E0bDNnaXJhUlIlMkZCakIzVHJpM1dmMFBTcDlrcjl0Mk5YRURYUyUyQmNqN2RhNCUyQmJXQjdEODVQYUxVOTFCbU5peFRwdUtmRDFVNHkwbWEyZmV4NERZVEhjd2tSemd1SkxRaFBZb05qQXJ1YllzNlZiWExQbTNiTzg4NkxHTUc0bGlzREhqUVRrT25mVlZ3WWhTd1J3ODFEaXZtcDBoaGNMeTJvQWxvVmpJVnNhUSUyRm5BdzIyVXBhMmNjRTh4TiUyQkN6TDFlZVdFR2hXTkNTc3YxaERWV1VEWWU3YklESHlsbmJvOFp2YnBKS1ZuVG4zTHNhTFE4WG1lZ1dxUUE4RFF4TWIlMkJIMiUyQlM5N0FKNkNYUkF4YkdxTHpKMmFRTk51WmhYZ1E5VEpxMGdnJTNEJTNE&width=375',
        streamVideo: 'https://videos.puffyapp.com/2018/10/15/hls/2DEDA425-9F5E-4381-93D5-F2A231BE3ADC-1539629049432/video.m3u8',
        rawDescription: '',
        userTags: [],
        hashTags: [],
        description: 'Pounds CBD promo vid ! Gets some CBD isolate in your system',
        numComments: 0,
        numLikes: 2,
        didLike: false,
        isPrivate: false,
        createdAt: 1539629050000,
        showcaseViews: 99
    }
    

    function populateFields(userData){
        $('#communityItemId').html(userData.communityItemId)
        $('#userId').html(userData.userId)
        $('#userName').html(userData.userName)
        $('#user').html(userData.user)
        $('#name').html(userData.name)
        $('#id').html(userData.id)
        $('#last_sign_in_at').html(userData.last_sign_in_at)
        $('#mediaItem').html(userData.mediaItem)
        $('#mediaId').html(userData.mediaId)
        $('#mediaType').html(userData.mediaType)
        $('#mediaUrl').html(userData.mediaUrl)
        $('#thumbnailUrl').html(userData.thumbnailUrl)
        $('#streamVideo').html(userData.streamVideo)
        $('#rawDescription').html(userData.rawDescription)
        $('#userTags').html(userData.userTags)
        $('#hashTags').html(userData.hashTags)
        $('#description').html(userData.description)
        $('#numComments').html(userData.numComments)
        $('#numLikes').html(userData.numLikes)
        $('#didLike').html(userData.didLike)
        $('#isPrivate').html(userData.isPrivate)
        $('#createdAt').html(userData.createdAt)
        $('#showcaseViews').html(userData.showcaseViews)
    };

    $( document ).ready(function() {
        populateFields(showcaseData)
    });

let data = {foo: 'bar'};
let htmlElemId = 'avatarURL'; 
$('#avatarURL'+htmlElemId).attr('src',data.avatarURL)

    $( document ).ready(function() {
       htmlElemId(data) 
    });
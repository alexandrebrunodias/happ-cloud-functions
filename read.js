async function main(params) {
    const cloudant = require('@cloudant/cloudant')({
        account: '',
        password: ''
    }).use('feeling');

    if(!params.username) {
        return { 
            error: 'Username can not be null'
        }
    }

    const result = await cloudant.find({ selector: { username: params.username }});
    delete result.bookmark;
    delete result.warning;
    return result;
}
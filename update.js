async function main(params) {
    const cloudant = require('@cloudant/cloudant')({
        account: '',
        password: ''
    }).use('feeling');

    if(!params.id && !params.username && !params.text && !params.feeling) {
        return { 
            error: 'Netheir username, text or feeling can be null'
        }
    }

    const feeling = {
        _id: id,
        user_id: params.username,
        text: params.text,
        password: params.feeling,
        date: new Date()
    };

    const result = await cloudant.insert(feeling);
    
	return { 
        message: result.ok ? 'Successfully created' : 'Creation failed'
    };
}
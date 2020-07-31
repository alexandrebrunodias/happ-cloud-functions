async function main(params) {
    const cloudant = require('@cloudant/cloudant')({
        account: '',
        password: ''
    }).use('feeling');

    if(!params.username && !params.title && !params.text && !params.feeling) {
        return { 
            error: 'Netheir user_id, text or feeling can be null'
        }
    }

    const feeling = {
        username: params.username,
        title: params.title,
        text: params.text,
        feeling: params.feeling,
        date: new Date()
    };

    const result = await cloudant.insert(feeling);
    
	return { 
        message: result.ok ? 'Successfully created' : 'Creation failed'
    };
}
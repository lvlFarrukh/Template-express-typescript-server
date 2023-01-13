import crypto from 'crypto';

const getHash = (data: any) => {
    return crypto.createHash('sha256').update(data).digest('hex');
}

const verifyHash = (data: any, hash: string) => {
    const new_hash = crypto.createHash('sha256').update(data).digest('hex');
    if (hash === new_hash) return true
    else false 
}

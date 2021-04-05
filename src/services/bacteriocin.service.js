import {get} from '@/config/http'

export function getInfoData() {
    return get('/bacteriocin_info')
}
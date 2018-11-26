import {
  controller,
  get
} from '../lib/decorator'

import rp from 'request-promise-native'

@controller('/api')
export class testController {
  @get('/test')
  async getTest(ctx, next) {
    const url = `http://localhost:8080/api/cruises/detail?seo=serena-2018-12-15`
    let body
    let options = {
      method: 'GET',
      uri: url,
      json: true,
      headers: {
        'X-COSTA-APP-ID': 'Y29HYIHI'
      }
    }

    const res = await rp(options)

    try {
      body = res
    } catch (err) {
      console.log(err)
    }

    ctx.body = {
      success: true,
      data: body
    }
  }
}

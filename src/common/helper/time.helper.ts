import { config } from 'dotenv';
import { DateTime } from 'luxon';

config();

export const getLocalNow = () => DateTime.now().setZone(process.env.TZ);
export const getLocalNowAsDate = (): Date => getLocalNow().toJSDate();

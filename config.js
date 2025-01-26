import dotenv from 'dotenv';
dotenv.config();

const config = {
  SESSION_ID: process.env.SESSION_ID || 'XSTRO_57_83_88',
  SUDO: process.env.SUDO || '94729865906',
  BOT_INFO: process.env.BOT_INFO || 'αѕтяσχ11;χѕтяσ м∂',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
  VERSION: '1.3.3',
};

export { config };
export default { config };

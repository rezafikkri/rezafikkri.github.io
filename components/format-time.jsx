'use client';

import dayjs from "dayjs";
import 'dayjs/locale/id';

dayjs.locale('id');

export default function FormatTime({ className, lastmod, format }) {
  return <time className={className}>{dayjs(lastmod).format(format)}</time>;
}

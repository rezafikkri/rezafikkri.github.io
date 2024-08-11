'use client';

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/id';

dayjs.extend(relativeTime);
dayjs.locale('id');

export default function RelativeTime({ className, lastmod }) {
  return <time className={className}>{dayjs(lastmod).fromNow()}</time>;
}

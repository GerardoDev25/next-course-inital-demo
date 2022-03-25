import Link from 'next/link';

import DarkLayout from '../componets/layouts/DarkLayout';
import MainLayout from '../componets/layouts/MainLayout';

export default function About() {
  return (
    <>
      <h1>About</h1>

      <h1 className={'title'}>
        go to <Link href="/">home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

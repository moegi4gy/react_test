export const metadata = {
  title: 'Reactテスト',
  description: 'Reactを使ってみるテストです。',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
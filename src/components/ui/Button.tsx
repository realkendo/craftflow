export default function Button(props: { backgroundColor: string }) {
  const backgroundColor = props.backgroundColor;
  console.log(backgroundColor);
  return (
    <>
      <button className={`bg-${backgroundColor} text-brandOrange px-1`}>
        click me
      </button>
    </>
  );
}

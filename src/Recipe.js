import React from "react";

const Row = ({ ingredients, description, time }) => (
  <>
    {ingredients && ingredients.length > 0 && (
      <div
        style={{
          height: ingredients.length > 1 ? "100%" : 0,
          width: "100%",
          border: "1px solid #d8d8d8",
          borderLeftColor: "transparent",
          borderBottomColor:
            ingredients.length === 1 ? "transparent" : "#d8d8d8",
          gridColumn: "3",
          gridRowEnd: `span ${ingredients.length + 1}`
        }}
      />
    )}

    <div
      style={{
        marginLeft: 16,
        marginRight: 16,
        gridColumn: "4",
        gridRowEnd: `span ${ingredients ? ingredients.length + 1 : 1}`
      }}
    >
      {description}
    </div>
    <div
      style={{
        marginLeft: 16,
        gridColumn: "5",
        gridRowEnd: `span ${ingredients ? ingredients.length + 1 : 1}`,
        color: "gray"
      }}
    >
      {time}
    </div>
    {ingredients &&
      ingredients.map(({ name, amount }) => (
        <>
          <span
            style={{
              gridColumn: "1",
              justifySelf: "end",
              color: "gray",
              marginRight: 12
            }}
          >
            {amount}
          </span>

          <span
            style={{ gridColumn: "2", fontWeight: "bold", marginRight: 16 }}
          >
            {name}
          </span>
        </>
      ))}

    <div style={{ height: `1rem`, gridColumn: "1 / -1" }} />
  </>
);

export default function Recipe({ title, time, nutrition, steps, image }) {
  return (
    <article style={{ width: "100%", marginLeft: 24 }}>
      <section
        style={{
          marginBottom: 16,
          marginTop: 0,
          padding: 0,
          paddingRight: 16,
          height: 150,
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPositionY: "50%",
          display: "flex",
          boxShadow: "inset 0 -120px 50px -50px rgba(0, 0, 0, 0.6)"
        }}
      >
        <h2
          style={{
            marginLeft: 80,
            marginBottom: 16,
            letterSpacing: 0.6,
            fontSize: "2.5rem",
            color: "white",
            fontFamily: "Abril Fatface",
            marginTop: "auto"
          }}
        >
          {title}
        </h2>
      </section>

      <section style={{ marginLeft: 80, marginBottom: 24 }}>
        {time && (
          <p style={{ color: "gray", margin: 0, fontSize: "0.9rem" }}>
            Cook time: {time}
          </p>
        )}
        {nutrition && (
          <p style={{ color: "gray", margin: 0, fontSize: "0.9rem" }}>
            Nutrition (100g): calories {nutrition.kcal}kcal · protein{" "}
            {nutrition.protein}g · carbs {nutrition.carb}g · fat {nutrition.fat}
            g{" "}
          </p>
        )}
      </section>

      <section
        style={{
          lineHeight: "1.2",
          display: "grid",
          gridTemplateColumns:
            "80px fit-content(140px) 10px fit-content(800px) 80px",
          alignItems: "center",
          justifyItems: "start",
          paddingRight: 16
        }}
      >
        {steps.map((step, idx) => (
          <>
            <ul style={{ listStyle: "none", display: "contents" }}>
              <li style={{ display: "contents", textAlign: "left" }}>
                <Row
                  key={idx}
                  ingredients={step.ingredients}
                  description={step.description}
                  time={step.time}
                />
              </li>
            </ul>
          </>
        ))}
      </section>
    </article>
  );
}

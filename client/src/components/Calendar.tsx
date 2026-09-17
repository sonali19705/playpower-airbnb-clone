import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

const Calendar = () => {
  const octoberWeeks: (number | null)[][] = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const novemberWeeks: (number | null)[][] = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
  ];

  const isOctoberSelected = (day: number) =>
    day === 18 || day === 23;

  const isOctoberBetween = (day: number) =>
    day >= 19 && day <= 22;

  const isNovemberUnavailable = (day: number) =>
    day >= 18 && day <= 24;

  const isNovemberUnavailableLate = (day: number) =>
    day === 29 || day === 30;

  return (
    <section className="calendar-section">
      <div className="calendar-heading">
        <h2>5 nights in Candolim</h2>
        <p>18 Oct 2026 - 23 Oct 2026</p>
      </div>

      <div className="calendar-months">
        {/* October 2026 */}
        <div className="calendar-month">
          <div className="calendar-month-header">
            <button
              type="button"
              className="calendar-arrow"
              aria-label="Previous month"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>

            <h3>October 2026</h3>

            <span className="calendar-header-spacer" />
          </div>

          <div className="calendar-weekdays">
            {["S", "M", "T", "W", "T", "F", "S"].map(
              (day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              )
            )}
          </div>

          <div className="calendar-grid">
            {octoberWeeks.flatMap((week, weekIndex) =>
              week.map((day, dayIndex) => {
                if (day === null) {
                  return (
                    <div
                      className="calendar-day calendar-empty"
                      key={`oct-empty-${weekIndex}-${dayIndex}`}
                    />
                  );
                }

                const selected = isOctoberSelected(day);
                const between = isOctoberBetween(day);

                return (
                  <div
                    className={[
                      "calendar-day",
                      selected ? "calendar-selected" : "",
                      between ? "calendar-between" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={`oct-${day}`}
                  >
                    <span>{day}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* November 2026 */}
        <div className="calendar-month">
          <div className="calendar-month-header">
            <span className="calendar-header-spacer" />

            <h3>November 2026</h3>

            <button
              type="button"
              className="calendar-arrow"
              aria-label="Next month"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          </div>

          <div className="calendar-weekdays">
            {["S", "M", "T", "W", "T", "F", "S"].map(
              (day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              )
            )}
          </div>

          <div className="calendar-grid">
            {novemberWeeks.flatMap((week, weekIndex) =>
              week.map((day, dayIndex) => {
                if (day === null) {
                  return (
                    <div
                      className="calendar-day calendar-empty"
                      key={`nov-empty-${weekIndex}-${dayIndex}`}
                    />
                  );
                }

                const unavailable =
                  isNovemberUnavailable(day) ||
                  isNovemberUnavailableLate(day);

                return (
                  <div
                    className={`calendar-day ${
                      unavailable
                        ? "calendar-unavailable"
                        : ""
                    }`}
                    key={`nov-${day}`}
                  >
                    <span>{day}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="calendar-footer">
        <button
          type="button"
          className="calendar-small-button"
          aria-label="Calendar options"
        >
          <CalendarDays size={22} strokeWidth={1.5} />
        </button>

        <button type="button" className="clear-dates">
          Clear dates
        </button>
      </div>
    </section>
  );
};

export default Calendar;
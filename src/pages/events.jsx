import React from "react";
import { PageLayout } from "../common/layouts/PageLayout";
import Carousel from "../common/components/Carousel";

const EventsPage = () => {
  return (
    <PageLayout className="flex flex-col justify-evenly gap-5">
      <section>
        <h3 className="text-xl sm:text-2xl md:text-4xl">EVENTS PLANNED</h3>

        <Carousel>
          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>
        </Carousel>
      </section>

      <section>
        <h3 className="text-xl sm:text-2xl md:text-4xl">EVENTS CONDUCTED</h3>

        <Carousel>
          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
            />
          </div>

          <div className="w-full h-60">
            <img
              className="p-1 w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
            />
          </div>
        </Carousel>
      </section>
    </PageLayout>
  );
};

export default EventsPage;

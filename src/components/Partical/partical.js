import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Partic = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    const particles = container?.ownerDocument?.querySelector("#tsparticles");

    if (particles) {
      particles.particles.move.enable = true;
      particles.particles.move.speed = 1;
      particles.particles.move.direction = "right";
      particles.particles.move.random = false;
      particles.particles.move.straight = false;
      particles.particles.move.outMode = "out";
      particles.particles.move.attract.enable = false;
      particles.particles.move.rotateX.value = 5000;
      particles.particles.move.rotateY.value = 5000;

      particles.particles.number.value = 200; // Increase the number of particles

      particles.particles.color = {
        value: ["#FF0000", "#000000"],
      };

      particles.particles.opacity.value = 0.5;
      particles.particles.opacity.random = false;

      particles.particles.shape.type = "circle";

      particles.refresh();
    }
  }, []);
  useEffect(() => {
    const container = document.querySelector("#particles-container");
    container.style.width = "100%";
    container.style.height = "100vh";
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.zIndex = "1";
    container.style.pointerEvents = "none";
    container.style.background = "transparent";
  
    // Return a cleanup function to remove the styles when the component unmounts
    return () => {
      container.style.width = "";
      container.style.height = "";
      container.style.position = "";
      container.style.left = "";
      container.style.top = "";
      container.style.zIndex = "";
      container.style.pointerEvents = "";
      container.style.background = "";
    };
  }, []);
  

  return (
    <div id="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.50,
              },
            },
          },
          particles: {
            color: {
              value: ["#FF0000", "#000000"],
            },
            // links: {
            //   color: "#ffffff",
            //   distance: 150,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "right",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
              },
              rotateX: {
                value: 5000,
              },
              rotateY: {
                value: 5000,
              },
            },
            number: {
              value: 200, // Increase the number of particles
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
            },
          },
          detectRetina: true,
          responsive: [
            {
              breakpoint: 768, // Adjust the breakpoint value as needed
              options: {
                particles: {
                  number: {
                    value: 80, // Decrease the number of particles for mobile screens
                  },
                  // links: {
                  //   distance: 100, // Decrease the distance between particles for mobile screens
                  // },
                },
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default Partic;

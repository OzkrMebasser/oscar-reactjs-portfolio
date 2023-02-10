import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Particle() {
  const particlesInit = async (main) => {
    //console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    //console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          background: {
            color: {
              value: "#002FFF"
            },
            
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          },
          width: "50%",
          fullScreen: {
            zIndex: -5
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: []
                }
              },
              grab: {
                distance: 400
              },
              repulse: {
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 50,
                  speed: 1,
                  maxSpeed: 15,
                  easing: "ease-out-quad",
                  selectors: []
                }
              }
            }
          },
          particles: {
            color: {
              value: "#fff"
            },
            lines: {
              color: {
                value: "#1d3788"
              },
              distance: 150,
              enable: true,
              opacity: 5
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
              }
            },
            number: {
              density: {
                enable: true
              },
              value: 100
            },
            opacity: {
              random: {
                enable: true
              },
              value: {
                min: 0.1,
                max: 1
              },
              animation: {
                enable: true,
                speed: 1.2,
                minimumValue: 5
              }
            },
            size: {
              random: {
                enable: true
              },
              value: {
                min: 0.1,
                max: 1.5
              },
              animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.1
              }
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 1,
                opacity: 1,
                color: {
                  value: "#fff"
                }
              },
              particles: {
                enable: true,
                frequency: 0.001,
                opacity: 5,
                color: {
                  value: "#dd0018"
                }
              }
            }
          }
        }
    }
    />
  );
};

export default Particle
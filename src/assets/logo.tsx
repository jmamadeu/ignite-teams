import * as React from "react";
import { Ref } from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export const MainLogoSVG = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg width={46} height={55} fill="none" {...props}>
    <Path
      stroke="#00B37E"
      d="M23.215 51.062h-.011a3.641 3.641 0 0 1-1.816-.453h-.002l-.616-.35A30.845 30.845 0 0 1 9.304 38.966 30.777 30.777 0 0 1 5.1 23.445v-.294a3.623 3.623 0 0 1 1.815-3.174l14.474-8.133.005-.002a3.641 3.641 0 0 1 3.636 0l.005.002 14.47 8.132.003.001a3.633 3.633 0 0 1 1.816 3.174v.293A30.777 30.777 0 0 1 37.1 38.972a30.846 30.846 0 0 1-11.487 11.287h-.001l-.616.35h-.003c-.544.3-1.157.457-1.78.453Z"
    />
    <G clipPath="url(#a)">
      <Path
        fill="#FBA94C"
        d="M15.903 9.182a.381.381 0 0 0-.222-.686l-1.55-.059a.04.04 0 0 1-.034-.025L13.56 6.97a.381.381 0 0 0-.578-.181.381.381 0 0 0-.14.181l-.534 1.447a.04.04 0 0 1-.035.026l-1.55.058a.383.383 0 0 0-.358.497.381.381 0 0 0 .136.19l1.216.952a.04.04 0 0 1 .014.041l-.419 1.478a.38.38 0 0 0 .362.486.383.383 0 0 0 .22-.066l1.285-.858a.038.038 0 0 1 .043 0l1.285.858a.38.38 0 0 0 .576-.183.376.376 0 0 0 .006-.229l-.422-1.483a.037.037 0 0 1 .014-.04l1.221-.962Z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#FBA94C"
        d="M35.537 9.182a.381.381 0 0 0-.222-.686l-1.55-.059a.04.04 0 0 1-.035-.025l-.535-1.442a.381.381 0 0 0-.578-.181.381.381 0 0 0-.14.181l-.534 1.447a.04.04 0 0 1-.035.026l-1.55.058a.384.384 0 0 0-.357.264.38.38 0 0 0 .135.422l1.216.953a.039.039 0 0 1 .014.041l-.419 1.478a.38.38 0 0 0 .362.486.383.383 0 0 0 .22-.066l1.285-.858a.038.038 0 0 1 .043 0l1.285.858a.38.38 0 0 0 .576-.183.376.376 0 0 0 .006-.229l-.422-1.483a.038.038 0 0 1 .014-.041l1.221-.96Z"
      />
    </G>
    <G clipPath="url(#c)">
      <Path
        fill="#FBA94C"
        d="M26.501 4.813a.494.494 0 0 0-.001-.812.528.528 0 0 0-.3-.1l-2.105-.077a.055.055 0 0 1-.028-.01.052.052 0 0 1-.018-.024l-.728-1.913a.507.507 0 0 0-.19-.241.529.529 0 0 0-.785.24l-.724 1.921a.053.053 0 0 1-.019.024.055.055 0 0 1-.028.01l-2.104.078a.528.528 0 0 0-.301.1.494.494 0 0 0-.001.812l1.65 1.264a.052.052 0 0 1 .02.054l-.569 1.962a.493.493 0 0 0 .194.549.528.528 0 0 0 .597.009l1.744-1.14a.052.052 0 0 1 .058 0l1.744 1.14a.523.523 0 0 0 .597 0 .49.49 0 0 0 .194-.547l-.573-1.968a.05.05 0 0 1 .018-.055l1.658-1.276Z"
      />
    </G>
    <Path
      stroke="#FBA94C"
      d="M23.215 47.729h-.01a3.04 3.04 0 0 1-1.515-.376l-.002-.002-.525-.296a26.233 26.233 0 0 1-9.76-9.596 26.11 26.11 0 0 1-3.58-13.187v-.251a3.008 3.008 0 0 1 1.513-2.639l12.355-6.928.005-.003a3.04 3.04 0 0 1 3.032 0l.005.003 12.354 6.928a3.008 3.008 0 0 1 1.512 2.639v.251a26.109 26.109 0 0 1-3.594 13.192 26.234 26.234 0 0 1-9.778 9.59h-.001l-.525.297-.003.002c-.454.25-.964.379-1.483.376Z"
    />
    <Path
      fill="#FBA94C"
      fillRule="evenodd"
      d="M20.973 38.474c0-.372.303-.673.676-.673h2.702a.674.674 0 1 1 0 1.346H21.65a.674.674 0 0 1-.676-.673Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00B37E"
      fillRule="evenodd"
      d="M22.151 20.77a1.337 1.337 0 0 1 1.7.003c.84.68 2.655 2.368 3.66 4.97 1.019 2.64 1.174 6.15-1.22 10.37a.676.676 0 0 1-.589.341h-5.404a.676.676 0 0 1-.585-.336c-2.444-4.221-2.295-7.737-1.264-10.38 1.014-2.603 2.853-4.29 3.702-4.967ZM23 21.819c-.758.604-2.397 2.113-3.292 4.407-.854 2.192-1.056 5.167.985 8.883h4.61c1.998-3.714 1.793-6.69.947-8.882-.884-2.29-2.498-3.797-3.25-4.408Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00B37E"
      fillRule="evenodd"
      d="M18.864 28.483a.671.671 0 0 1 .086.948l-2.646 3.157v.002l1.039 4.685 2.533-2.02a.677.677 0 0 1 .95.106.671.671 0 0 1-.106.946l-2.534 2.02a1.354 1.354 0 0 1-2.162-.758v-.002l-1.037-4.678a1.307 1.307 0 0 1 .277-1.16l2.649-3.16a.677.677 0 0 1 .951-.086ZM27.085 28.415a.677.677 0 0 1 .952.087l2.7 3.228a1.31 1.31 0 0 1 .276 1.159l-1.037 4.678v.002a1.345 1.345 0 0 1-.87.976 1.356 1.356 0 0 1-1.292-.219l-2.534-2.02a.671.671 0 0 1-.105-.945.677.677 0 0 1 .95-.105l2.532 2.019 1.038-4.685v-.002L27 29.363a.671.671 0 0 1 .086-.948Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBA94C"
      d="M23 28.714c.56 0 1.013-.452 1.013-1.01s-.454-1.01-1.013-1.01c-.56 0-1.013.453-1.013 1.01 0 .558.453 1.01 1.013 1.01Z"
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10.047 6.303h6.2v6.178h-6.2z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M29.681 6.303h6.2v6.178h-6.2z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M17.798 0h10.334v10.296H17.798z" />
      </ClipPath>
    </Defs>
  </Svg>
);

// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BuildTwoToneSvg from '@whalue-design/icons-svg/lib/asn/BuildTwoTone';

export default {
  name: 'IconBuildTwoTone',
  displayName: 'BuildTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BuildTwoToneSvg } },
      children,
    ),
};
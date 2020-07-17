// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BuildFilledSvg from '@whalue-design/icons-svg/lib/asn/BuildFilled';

export default {
  name: 'IconBuildFilled',
  displayName: 'BuildFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BuildFilledSvg } },
      children,
    ),
};
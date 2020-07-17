// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BuildOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BuildOutlined';

export default {
  name: 'IconBuildOutlined',
  displayName: 'BuildOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BuildOutlinedSvg } },
      children,
    ),
};
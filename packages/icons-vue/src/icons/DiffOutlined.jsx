// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DiffOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DiffOutlined';

export default {
  name: 'IconDiffOutlined',
  displayName: 'DiffOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DiffOutlinedSvg } },
      children,
    ),
};
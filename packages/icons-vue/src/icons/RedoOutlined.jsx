// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RedoOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RedoOutlined';

export default {
  name: 'IconRedoOutlined',
  displayName: 'RedoOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedoOutlinedSvg } },
      children,
    ),
};
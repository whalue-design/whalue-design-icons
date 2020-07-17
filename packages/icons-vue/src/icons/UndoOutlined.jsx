// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UndoOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UndoOutlined';

export default {
  name: 'IconUndoOutlined',
  displayName: 'UndoOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UndoOutlinedSvg } },
      children,
    ),
};